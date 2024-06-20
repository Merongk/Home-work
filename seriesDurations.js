const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
    // Add your favorite series here
    {
      title: "Breaking Bad",
      days: 2,
      hours: 14,
      minutes: 0,
    }
  ];
  
  const averageLifespan = 80 * 365 * 24 * 60; // in minutes
  
  function calculateSeriesPercentage(series) {
    const seriesInMinutes = series.days * 24 * 60 + series.hours * 60 + series.minutes;
    return (seriesInMinutes / averageLifespan) * 100;
  }
  
  function logOutSeriesText() {
    let totalPercentage = 0;
    seriesDurations.forEach((series) => {
      const percentage = calculateSeriesPercentage(series);
      totalPercentage += percentage;
      console.log(`${series.title} took ${percentage.toFixed(3)}% of my life`);
    });
    console.log(`In total that is ${totalPercentage.toFixed(3)}% of my life`);
  }
  
  logOutSeriesText();
  