import "./dashboard.css";
import { Card , CardGroup } from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
// Sector
import { dataDashboard, dataDashboard2 } from "../../Data/dataDashboard";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Dashboard = () => {
  const data = dataDashboard;
  // console.log(data);
  const imgLogoC = "../assets/logo/logoo 2.png";

  return (
    <>
      <div className="konten-dashboard">
        <div className="imgLogoCinem">
          <img src={imgLogoC} alt="logo-cinemaVII" />
        </div>
    <div className="card-admin">
    <CardGroup>
      <Card >
        <Card.Body className="BT">
          <Card.Title>Buying Ticket</Card.Title>
          <Card.Text>
           7.500 Ticket Sold
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card > 
        <Card.Body className="VT">
          <Card.Title>View Trailer</Card.Title>
          <Card.Text>
           9.500 Views
                     </Card.Text>
        </Card.Body>
       
      </Card>

    </CardGroup>
    </div>

        
        <div className="bungkus-dash">
          <div className="buletan-dasboard">
            <PieChart width={400} height={400}>
              <Pie
                data={dataDashboard2}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="stats-dashboard">
            <LineChart
              width={800}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
