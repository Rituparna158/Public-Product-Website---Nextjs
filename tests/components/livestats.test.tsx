import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import LiveStats from '@/components/LiveStats'

describe('LiveStats', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('shows loading initially', () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => ({ totalSubscribers: 100 }),
    } as Response)

    render(<LiveStats />)

    expect(screen.getByText('...')).toBeInTheDocument()
  })

  it('renders subscribers after fetch', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => ({ totalSubscribers: 250 }),
    } as Response)

    render(<LiveStats />)

    await waitFor(() => {
      expect(screen.getByText('250+')).toBeInTheDocument()
    })
  })

  it('handles fetch error gracefully', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('fail'))

    render(<LiveStats />)

    await waitFor(() => {
      expect(screen.queryByText('...')).not.toBeInTheDocument()
    })
  })
})

