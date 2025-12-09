import { Component, signal, ViewChild, ElementRef, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BrandLogoComponent } from './components/brand-logo.component';
import { IconComponent, SectionHeaderComponent, CardComponent } from './components/ui-components';
import { AuthButtonComponent } from './components/auth-button.component';
import { GeminiService } from './services/gemini.service';
import { AuthService } from './services/auth.service';

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    BrandLogoComponent,
    IconComponent,
    SectionHeaderComponent,
    CardComponent,
    AuthButtonComponent
  ],
  templateUrl: './app.component.html',
  styles: [`
    :host { display: block; }
    /* Custom scrollbar for chat */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
    ::-webkit-scrollbar-thumb { background: rgba(0, 217, 255, 0.2); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(0, 217, 255, 0.4); }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  private geminiService = inject(GeminiService);
  private authService = inject(AuthService);
  private authSubscription?: Subscription;

  isMobileMenuOpen = signal(false);
  chatMessages = signal<ChatMessage[]>([]);
  isLoading = signal(false);
  chatInput = new FormControl('');
  
  // Foundation cards expanded state
  foundationExpanded = signal({
    sourceOfTruth: false,
    userExperiences: false,
    customerJourneys: false
  });

  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  ngOnInit() {
    // Subscribe to auth state changes
    this.authSubscription = this.authService.authState$.subscribe(async (user) => {
      if (user) {
        // User is logged in - check login history
        try {
          const history = await this.authService.getUserLoginHistory();
          if (history.isFirstLogin) {
            console.log('🎉 Show onboarding flow');
            // TODO: Trigger onboarding flow here
          } else {
            console.log(`👋 Welcome back! Account is ${history.accountAge} days old`);
            // TODO: Show personalized welcome message
          }
        } catch (error) {
          console.error('Error getting user login history:', error);
        }
      } else {
        console.log('User logged out');
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  toggleFoundation(card: 'sourceOfTruth' | 'userExperiences' | 'customerJourneys') {
    this.foundationExpanded.update(state => ({
      ...state,
      [card]: !state[card]
    }));
  }

  scrollToChat() {
    document.getElementById('chat')?.scrollIntoView({ behavior: 'smooth' });
  }

  async sendMessage(event: Event) {
    event.preventDefault();
    const message = this.chatInput.value?.trim();
    if (!message || this.isLoading()) return;

    // Add User Message
    this.chatMessages.update(msgs => [...msgs, { role: 'user', content: message }]);
    this.chatInput.setValue('');
    this.isLoading.set(true);
    this.scrollToBottom();

    try {
      const response = await this.geminiService.sendMessage(this.chatMessages(), message);
      
      this.chatMessages.update(msgs => [...msgs, { role: 'ai', content: response }]);
    } catch (error) {
      this.chatMessages.update(msgs => [...msgs, { role: 'ai', content: "Connection error. Please try again." }]);
    } finally {
      this.isLoading.set(false);
      this.scrollToBottom();
    }
  }

  private scrollToBottom() {
    setTimeout(() => {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    }, 100);
  }
}
