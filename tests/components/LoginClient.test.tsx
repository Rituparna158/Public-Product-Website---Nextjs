import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import LoginClient from '@/app/login/LoginClient'

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

import { signIn } from 'next-auth/react'

const mockedSignIn = vi.mocked(signIn)

describe('LoginClient', () => {
  it('shows validation error', async () => {
    render(<LoginClient />)

    fireEvent.click(screen.getByText('Login'))

    await waitFor(() => {
      expect(screen.getByText(/enter valid email/i)).toBeInTheDocument()
    })
  })

  it('updates input values', () => {
    render(<LoginClient />)

    const email = screen.getByPlaceholderText('Email')

    fireEvent.change(email, {
      target: { value: 'user@test.com' },
    })

    expect((email as HTMLInputElement).value).toBe('user@test.com')
  })

  it('calls signIn on submit', async () => {
    mockedSignIn.mockResolvedValue({
      ok: true,
      error: null,
      status: 200,
      url: null,
    })

    render(<LoginClient />)

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@mail.com' },
    })
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: '1234' },
    })

    fireEvent.click(screen.getByText('Login'))

    await waitFor(() => {
      expect(mockedSignIn).toHaveBeenCalled()
    })
  })
})


