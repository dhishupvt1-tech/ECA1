
export interface Event {
  id: string;
  title: string;
  time: string;
  sector: string;
  description: string;
  image: string;
  location: string;
  type: 'on-stage' | 'off-stage' | 'online';
  day?: 1 | 2;
  session?: 1 | 2;
  guidelines: string[];
  status?: 'Live' | 'Upcoming' | 'Phase 1' | 'Open';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  directive: string;
  image: string;
  level: string;
}

export type SectorType = 'Music' | 'Dance' | 'Tech' | 'Art' | 'All';
