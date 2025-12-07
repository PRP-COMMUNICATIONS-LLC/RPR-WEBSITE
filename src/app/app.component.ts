import { Component, signal, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrandLogoComponent } from './components/brand-logo.component';
import { IconComponent, SectionHeaderComponent, CardComponent } from './components/ui-components';
import { GeminiService } from './services/gemini.service';

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
    CardComponent
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
export class AppComponent {
  private geminiService = inject(GeminiService);

  isMobileMenuOpen = signal(false);
  chatMessages = signal<ChatMessage[]>([]);
  isLoading = signal(false);
  chatInput = new FormControl('');

  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
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