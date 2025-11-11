import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function ChartsScreen() {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(139, 92, 246, ${opacity})`,
        strokeWidth: 3,
      },
    ],
  };

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 60],
      },
    ],
  };

  const pieData = [
    {
      name: 'Electronics',
      population: 35,
      color: '#8b5cf6',
      legendFontColor: '#94a3b8',
      legendFontSize: 14,
    },
    {
      name: 'Clothing',
      population: 25,
      color: '#ec4899',
      legendFontColor: '#94a3b8',
      legendFontSize: 14,
    },
    {
      name: 'Food',
      population: 20,
      color: '#3b82f6',
      legendFontColor: '#94a3b8',
      legendFontSize: 14,
    },
    {
      name: 'Books',
      population: 15,
      color: '#10b981',
      legendFontColor: '#94a3b8',
      legendFontSize: 14,
    },
    {
      name: 'Others',
      population: 5,
      color: '#f59e0b',
      legendFontColor: '#94a3b8',
      legendFontSize: 14,
    },
  ];

  const chartConfig = {
    backgroundColor: '#1e293b',
    backgroundGradientFrom: '#1e293b',
    backgroundGradientTo: '#334155',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(148, 163, 184, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#8b5cf6',
    },
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Monthly Revenue</Text>
          <Text style={styles.sectionSubtitle}>Line Chart</Text>
        </View>
        <View style={styles.chartContainer}>
          <LineChart
            data={lineData}
            width={screenWidth - 48}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
            withInnerLines={false}
            withOuterLines={true}
            withVerticalLines={false}
            withHorizontalLines={true}
            segments={4}
          />
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Weekly Sales</Text>
          <Text style={styles.sectionSubtitle}>Bar Chart</Text>
        </View>
        <View style={styles.chartContainer}>
          <BarChart
            data={barData}
            width={screenWidth - 48}
            height={220}
            chartConfig={{
              ...chartConfig,
              barPercentage: 0.7,
            }}
            style={styles.chart}
            withInnerLines={false}
            showBarTops={false}
            fromZero
          />
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Category Distribution</Text>
          <Text style={styles.sectionSubtitle}>Pie Chart</Text>
        </View>
        <View style={styles.chartContainer}>
          <PieChart
            data={pieData}
            width={screenWidth - 48}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            style={styles.chart}
            absolute
          />
        </View>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>$12,450</Text>
          <Text style={styles.statLabel}>Total Revenue</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>1,234</Text>
          <Text style={styles.statLabel}>Total Orders</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>456</Text>
          <Text style={styles.statLabel}>Active Users</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>98%</Text>
          <Text style={styles.statLabel}>Satisfaction</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  content: {
    padding: 16,
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#94a3b8',
  },
  chartContainer: {
    backgroundColor: '#243044ff',
    borderRadius: 19,
    padding: 8,
  },
  chart: {
    borderRadius: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 8,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8b5cf6',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
  },
});