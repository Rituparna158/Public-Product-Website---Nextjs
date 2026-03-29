import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeader } from '@/components/SectionHeader';

describe('SectionHeader', () => {
  it('renders all props correctly', () => {
    render(<SectionHeader tag="Test" title="Hello" sub="World" />);

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('World')).toBeInTheDocument();
  });

  it('handles empty values', () => {
    render(<SectionHeader tag="" title="" sub="" />);
  });

  it('does not crash with missing props', () => {
    render(<SectionHeader {...{ tag: '', title: '', sub: '' }} />);
  });
});
