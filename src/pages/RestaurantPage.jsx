import IsOpen from "./IsOpen";
import IsClose from "./IsClose";

export default function RestaurantPage() {
  const currentHour = new Date().getHours();
  const isClosed = currentHour >= 20 || currentHour < 8;

  return isClosed ? <IsClose /> : <IsOpen />;
}