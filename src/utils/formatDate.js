import { format, parseISO } from 'date-fns';

export function formatDate(dateString) {
    const date = parseISO(dateString);
    return format(date, "d MMMM yyyy HH:mm");
} 