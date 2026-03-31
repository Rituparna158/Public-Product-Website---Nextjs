import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import NewsletterForm from '@/components/NewsletterForm'

describe('NewsletterForm', () => {
  it('updates input value', () => {
    render(<NewsletterForm />)

    const input = screen.getByPlaceholderText('Enter your email')
    fireEvent.change(input, { target: { value: 'test@mail.com' } })

    expect((input as HTMLInputElement).value).toBe('test@mail.com')
  })

  it('shows success message on submit', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ message: 'Subscribed successfully' }),
    } as Response)

    render(<NewsletterForm />)

    const input = screen.getByPlaceholderText('Enter your email')
    const button = screen.getByText('Subscribe')

    fireEvent.change(input, { target: { value: 'test@mail.com' } })
    fireEvent.click(button)

    await waitFor(() => {
      expect(
        screen.getByText('Subscribed successfully')
      ).toBeInTheDocument()
    })
  })

  it('shows error message on failure', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Invalid email' }),
    } as Response)

    render(<NewsletterForm />)

    const input = screen.getByPlaceholderText('Enter your email')
    const button = screen.getByText('Subscribe')

    fireEvent.change(input, { target: { value: 'wrong' } })
    fireEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText('Invalid email')).toBeInTheDocument()
    })
  })
})
