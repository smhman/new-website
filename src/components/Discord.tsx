import formatDistanceStrict from "date-fns/formatDistanceStrict";
import { differenceInSeconds } from 'date-fns';
import Image from "next/future/image";
import { useEffect, useState } from "preact/hooks";
import { Activity, useLanyard } from "react-use-lanyard";
declare module "react-use-lanyard" {
	interface DiscordUser {
		display_name: string;
	}
}
const USER_ID = "1113690068113170484";

const statusColors: Record<string, string> = {
	online: "bg-emerald-500",
	idle: "bg-amber-400",
	dnd: "bg-rose-400"
};

const getStatusColor = (
	status: "online" | "idle" | "dnd" | "offline" | undefined
) => {
	if (!status) return "bg-gray-400";

	const str = statusColors[status];

	if (!str) return "bg-gray-400";

	return str;
};

const capitalize = (str: string) => {
	return str[0].toUpperCase() + str.slice(1);
};

export default function Discord() {
	const { status: lanyard } = useLanyard({
		userId: USER_ID,
		socket: true
	});

	// 2: listening, 4: custom status
	const otherActivities = lanyard?.activities.filter(
		activity => activity.type !== 2 && activity.type !== 4
	);

	return (
		<div className="mb-4 flex gap-2 items-center text-base leading-snug">
			{lanyard?.discord_user.avatar ? (
				<div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 relative">
					<Image
						src={`https://cdn.discordapp.com/avatars/${USER_ID}/${
							lanyard?.discord_user.avatar
						}.${
							lanyard?.discord_user.avatar.startsWith("a_")
								? "gif"
								: "webp"
						}?size=256`}
						alt="Discord Avatar"
						width={256}
						height={256}
						priority={true}
						className="rounded-full"
					/>
					<div
						className={`absolute bottom-0.5 right-0.5 w-3 h-3 md:w-4 md:h-4 rounded-full ring-[3px] md:ring-4 ring-black ${getStatusColor(
							lanyard?.discord_status
						)} cursor-pointer group flex justify-center`}
					>
						<div className="text-sm absolute z-10 mb-1 px-2 py-1 bg-slate-900 opacity-0 group-hover:opacity-100 transition pointer-events-none bottom-full rounded-lg w-max">
							{capitalize(lanyard?.discord_status)} on{" "}
							{lanyard.active_on_discord_mobile
								? "Mobile"
								: "Desktop"}
						</div>
					</div>
				</div>
			) : (
				<div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-full"></div>
			)}
			{lanyard ? (
				<div>
					<p>
						{lanyard?.discord_user.display_name}
						<span className="ml-2 opacity-80">
							{lanyard?.discord_user.username}
						</span>
					</p>
					<p style={{ display: 'flex', alignItems: 'center' }}>
  {lanyard?.activities[0]?.type === 4 && lanyard?.activities[0]?.emoji && (
    <Image
      src={
        lanyard.activities[0].emoji.animated
          ? `https://cdn.discordapp.com/emojis/${lanyard.activities[0].emoji.id}.gif?size=96`
          : `https://cdn.discordapp.com/emojis/${lanyard.activities[0].emoji.id}.webp?size=96&quality=lossless`
      }
      alt="rearea"
      width={32}
      height={32}
    />
  )}

  {lanyard?.activities[0]?.type === 4 && lanyard?.activities[0]?.state && (
    <span style={{ marginLeft: '8px' }}>
      {lanyard.activities[0].state}
    </span>
  )}
</p>

					<OtherActivities activities={otherActivities} />
				</div>
			) : (
				<div className="w-32 opacity-80">Loading...</div>
			)}
		</div>
	);
}

const activityTypes = [
	"Playing",
	"Streaming",
	"Listening to",
	"Watching",
	"Custom Status: ",
	"Competing in"
];

const getActivityType = (type: number) => {
	return activityTypes[type];
};

interface OtherActivitiesProps {
	activities: Activity[] | undefined;
}

function OtherActivities({ activities }: OtherActivitiesProps) {
	const [now, setNow] = useState(new Date());
  
	useEffect(() => {
	  const interval = setInterval(() => {
		setNow(new Date());
	  }, 1000);
  
	  return () => clearInterval(interval);
	}, []);
	
	return (
	  <>
		{activities?.map(activity => (
		  <p key={activity.id} className="flex-grow">
			<span className="opacity-80">
			  {getActivityType(activity.type)}
			</span>{" "}
			{activity.name}{" "}
			{activity.details && activity.state && (
        <span className="opacity-80">
		<br />
		{activity.details} | {activity.state}
		</span>
)}{" "}
			<br/>
<span className="opacity-80"> 
  {(() => {
    if (activity.timestamps?.end) {
      const endTimestamp = activity.timestamps.end;
      const durationInSeconds = differenceInSeconds(endTimestamp, now);

      if (durationInSeconds >= 86400) { // More than 24 hours
        const days = Math.floor(durationInSeconds / 86400);
        return `${days} days`;
      } else {
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
        const seconds = durationInSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} left`;
      }
    } else if (activity.created_at) {
      const createdAtTimestamp = activity.created_at;
      const elapsedInSeconds = differenceInSeconds(now, createdAtTimestamp);

      if (elapsedInSeconds >= 86400) { // More than 24 hours
        const days = Math.floor(elapsedInSeconds / 86400);
        return `${days} days`;
      } else {
        const hours = Math.floor(elapsedInSeconds / 3600);
        const minutes = Math.floor((elapsedInSeconds % 3600) / 60);
        const seconds = elapsedInSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} elapsed`;
      }
    } else {
      return "No time information available.";
    }
  })()}
</span>
		  </p>
		))}
	  </>
	);
  }
  
