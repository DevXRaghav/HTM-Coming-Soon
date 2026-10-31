export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isLaunched: boolean;
}

export interface VIPMember {
  email: string;
  vipId: string;
  interests: string[];
  joinedAt: string;
  voucherCode: string;
}

export interface InstrumentCategory {
  id: string;
  name: string;
  iconName: string;
}

export interface SocialChannel {
  name: string;
  handle: string;
  url: string;
  description: string;
  icon: string;
  followers: string;
  accentColor: string;
}
