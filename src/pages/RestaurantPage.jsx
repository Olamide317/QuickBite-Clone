import IsOpen from "./IsOpen";
import IsClose from "./IsClose";

export default function RestaurantPage(props) {
  const currentHour = new Date().getHours();
  // Change this temporarily if you want to force test Open vs Closed:
  const isClosed = currentHour >= 20 || currentHour < 8;

  return isClosed ? <IsClose {...props} /> : <IsOpen {...props} />;
}