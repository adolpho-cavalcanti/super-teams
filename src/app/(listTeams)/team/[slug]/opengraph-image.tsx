import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

import { api } from '@/data/api'
import { env } from '@/env'
import { Team } from '@/data/types/teams'

export const runtime = 'edge'

export const alt = ''

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getTeamBySlug(slug: string): Promise<Team> {
  const response = await api(`/teams/${slug}`, {
    next: {
      revalidate: 60 * 15, // 15 minutes
    },
  })

  const team = await response.json()

  return team
}

export default async function OgImage({
  params,
}: {
  params: { slug: string }
}) {
  const team = await getTeamBySlug(params.slug)

  const teamImageURL = new URL(team.imagem, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: '#F2F2F2',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img
          src={teamImageURL}
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    ),
    {
      ...size,
    },
  )
}