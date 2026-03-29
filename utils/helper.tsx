import { Badge } from 'lucide-react';

export function getLifecycleBadge(lifecycle: string) {
  const lower = lifecycle?.toLowerCase() ?? '';

  if (['confirmed', 'done', 'completed'].includes(lower)) {
    return <Badge className="db-badge db-badge--confirmed">{lifecycle}</Badge>;
  }

  if (['pending', 'scheduled'].includes(lower)) {
    return <Badge className="db-badge db-badge--pending">{lifecycle}</Badge>;
  }

  if (['cancelled', 'canceled'].includes(lower)) {
    return <Badge className="db-badge db-badge--cancelled">{lifecycle}</Badge>;
  }

  return <Badge className="db-badge db-badge--default">{lifecycle}</Badge>;
}

export function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export const avatarColors = [
  '#4a7c59',
  '#c9963f',
  '#c8552a',
  '#6a9e7a',
  '#3d4d48',
  '#7a5c9e',
  '#2d7a8c',
  '#8c2d4a',
];

export function getAvatarColor(name: string) {
  let hash = 0;

  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return avatarColors[Math.abs(hash) % avatarColors.length];
}

export function getAvatarStyle(color: string): React.CSSProperties {
  return {
    ['--avatar-color' as keyof React.CSSProperties]: color,
  };
}
