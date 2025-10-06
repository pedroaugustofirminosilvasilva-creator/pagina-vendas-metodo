// Sales Domain Types
export interface Testimonial {
  name: string
  revenue: string
  initial: string
  gradient: string
  border: string
  testimonial: string
}

export interface PainPoint {
  icon: string
  title: string
  description: string
}

export interface CommunityStat {
  value: string
  label: string
  color: string
}

export interface FloatingComment {
  name: string
  message: string
  time: string
}

export interface SalesConfig {
  affiliateLink: string
  presentationDuration: string
  urgencyHours: number
  communitySize: number
  totalRevenue: string
  successRate: number
  rating: number
}