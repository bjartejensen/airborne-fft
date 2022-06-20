export {};
declare global {
    interface Date {
        addDays(days: number): Date;
        dayDiff(endDate: Date): number;
        isValid(): boolean;
        toDateFromMoment(): Date;
        format(format: string): string;
    }
}
