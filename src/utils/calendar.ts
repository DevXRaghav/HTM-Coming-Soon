/**
 * Calendar utilities for Highway To Music Launch
 * Target: 26 January 2027, 10:00 AM IST
 */

export const LAUNCH_DATE_ISO = '2027-01-26T10:00:00+05:30';

export function getGoogleCalendarUrl(): string {
  const title = encodeURIComponent("🎸 Highway To Music Grand Launch | India's No. 1 Music Store");
  const details = encodeURIComponent(
    "Highway To Music is officially opening doors! Discover 50,000+ authentic guitars, synthesizers, drums, and pro studio gear with ₹1,000 VIP early bird vouchers and pan-India express delivery. Visit https://highwaytomusic.com"
  );
  const location = encodeURIComponent('highwaytomusic.com (Online Nationwide)');
  // UTC format: 2027-01-26 10:00 IST is 2027-01-26 04:30 UTC
  const dates = '20270126T043000Z/20270126T143000Z';

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
}

export function downloadIcsFile(): void {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Highway To Music//Launch Event//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:htm-launch-20270126@highwaytomusic.com',
    'DTSTAMP:20261030T000000Z',
    'DTSTART:20270126T043000Z',
    'DTEND:20270126T143000Z',
    'SUMMARY:Highway To Music Grand Launch - India\'s No. 1 Music Store',
    'DESCRIPTION:Grand launch of Highway To Music. Discover 50\\,000+ musical instruments\\, studio gear\\, exclusive opening discounts\\, and VIP voucher redemptions.',
    'LOCATION:highwaytomusic.com',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Highway-To-Music-Launch-2027.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
