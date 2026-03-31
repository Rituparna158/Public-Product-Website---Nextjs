import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import RegisterClient from '@/app/register/RegisterClient'

// mocks
vi.mock('next-auth/react', () => ({
  signIn: vi.fn(),
}))

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}))

describe('RegisterClient', () => {
  it('shows validation error for empty form', async () => {
    render(<RegisterClient />)

    fireEvent.click(screen.getByText('Register'))

    await waitFor(() => {
      expect(screen.getByText(/name is too short/i)).toBeInTheDocument()
    })
  })

  it('updates input fields', () => {
    render(<RegisterClient />)

    const nameInput = screen.getByPlaceholderText('Name')
    const emailInput = screen.getByPlaceholderText('Email')

    fireEvent.change(nameInput, { target: { value: 'Rahul' } })
    fireEvent.change(emailInput, { target: { value: 'rahul@test.com' } })

    expect((nameInput as HTMLInputElement).value).toBe('Rahul')
    expect((emailInput as HTMLInputElement).value).toBe('rahul@test.com')
  })

  it('submits form successfully', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({}),
    } as Response)

    render(<RegisterClient />)

    fireEvent.change(screen.getByPlaceholderText('Name'), {
      target: { value: 'Amit' },
    })
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'amit@test.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: '1234' },
    })

    fireEvent.click(screen.getByText('Register'))

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalled()
    })
  })
})



