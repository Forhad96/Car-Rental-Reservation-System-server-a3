export function calculateTotalCost(
  startTime: string,
  endTime: string,
  pricePerHour: number,
): number {
  // Parse the start and end times
  let start = new Date(`1970-01-01T${startTime}:00`);
  let end = new Date(`1970-01-01T${endTime}:00`);

  // Calculate the difference in milliseconds
  let durationInMilliSeconds = end.getTime() - start.getTime();

  // Convert milliseconds to hours
  let durationInHours = durationInMilliSeconds / (1000 * 60 * 60);

  // Calculate the total cost
  let totalCost = durationInHours * pricePerHour;

  return totalCost;
}

