import { UserAgent } from "@/views/userAgent";
import { headers } from 'next/headers';

const UserAgentRoot = () => {
  const userAgent = headers().get("user-agent") || "Unknown User Agent";
  return <UserAgent userAgent={userAgent}/>;
};

export default UserAgentRoot;
