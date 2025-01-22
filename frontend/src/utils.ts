export const daysBetween = (fromDate: Date, toDate: Date): number => {
  var millisecondsPerDay = 1000 * 60 * 60 * 24;
  var millisBetween = toDate.getTime() - fromDate.getTime();
  var days = millisBetween / millisecondsPerDay;
  // Round down.
  return Math.floor(days);
}