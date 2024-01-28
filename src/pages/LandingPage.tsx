import DonutChart from '@/components/visualizations/DonutChart';
const LandingPage = () => {
  return (
    <DonutChart
      data={[
        {
          name: 'apples',
          value: 100,
        },
        {
          name: 'bananas',
          value: 300,
        },
        {
          name: 'cherries',
          value: 250,
        },
      ]}
    />
  );
};

// eslint-disable-next-line import/no-unused-modules
export default LandingPage;
