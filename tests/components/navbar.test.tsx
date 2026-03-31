import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Navbar from '@/components/Navbar'

vi.mock('next-auth/react', () => ({
  useSession: vi.fn(),
  signOut: vi.fn(),
}))

import { useSession, signOut } from 'next-auth/react'

const mockedUseSession = vi.mocked(useSession)
const mockedSignOut = vi.mocked(signOut)

describe('Navbar', () => {
  it('shows login button when not logged in', () => {
    mockedUseSession.mockReturnValue({
      data: null,
      status: 'unauthenticated',
      update: vi.fn(), 
    })

    render(<Navbar />)

    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('shows user initials and logout when logged in', () => {
    mockedUseSession.mockReturnValue({
      data: {
        user: { name: 'Rahul Sharma' },
        expires: '',
      },
      status: 'authenticated',
      update: vi.fn(), 
    })

    render(<Navbar />)

    expect(screen.getByText('RS')).toBeInTheDocument()
    expect(screen.getByText('Logout')).toBeInTheDocument()
  })

  it('calls signOut on logout click', () => {
    mockedUseSession.mockReturnValue({
      data: {
        user: { name: 'Amit Kumar' },
        expires: '',
      },
      status: 'authenticated',
      update: vi.fn(), 
    })

    render(<Navbar />)

    fireEvent.click(screen.getByText('Logout'))

    expect(mockedSignOut).toHaveBeenCalled()
  })
})