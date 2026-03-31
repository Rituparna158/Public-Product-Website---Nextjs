import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

import { Button } from '@/components/ui/button';
import { ArrowRight } from './Icons';
import { FAQProps } from '@/types/FAQ';

export default function FAQSection({ faqs, hero }: FAQProps) {
  return (
    <section className="faq-section" id="faq">
      <div className="faq-layout">
        
        <div className="faq-sticky">
          <span className="section-tag">FAQ</span>

          <h2 className="section-title">
            Common <em>Questions</em>
          </h2>

          <p className="section-sub">
            Everything you need to know before getting started with LifeLine.
          </p>

          <div style={{ marginTop: '32px' }}>
            <Button asChild className="btn-primary">
              <a href={hero.ctaLink}>
                Get Started Free <ArrowRight />
              </a>
            </Button>
          </div>
        </div>

 
        <div className="faq-list">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="faq-item"
              >
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="faq-answer">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
