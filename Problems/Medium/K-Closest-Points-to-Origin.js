
// Time: O(n log n)
// Space: O(n)
const kClosest = function (points, K) {
  // #0 Error checking
  if (points.length === 0 || K === 0) {
    return null;
  }

  // #1 Calculate square distance
  const distances = [];
  for (point of points) {
    const distance = calculateDistance(point);
    distances.push(distance);
  }

  // #2 Sort from small to bigger
  distances.sort((a, b) => a - b);

  // #3 Prepeare empty array
  const result = [];

  // #4 Find closest K points
  const distanceK = distances[K - 1];
  for (point of points) {
    const distance = calculateDistance(point);
    if (distance <= distanceK) {
      result.push(point);
    }
  }

  return result;
};

function calculateDistance(point) {
  return (point[0] * point[0]) + (point[1] * point[1]);
}

console.log(kClosest([[3,3],[5,-1],[-2,4]], 2));