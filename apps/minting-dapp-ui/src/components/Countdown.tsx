import { MintButton } from './MintButton';

type Props = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const Countdown = ({
  days, hours, minutes, seconds, completed,
}: Props) => {
  if (completed) {
    return (
      <MintButton />
    );
  }

  const dateTextArr = [];

  if (days) {
    const plural = days > 1 ? 's' : '';
    dateTextArr.push(`${days} day${plural}`);
  }

  if (hours) {
    const plural = hours > 1 ? 's' : '';
    dateTextArr.push(`${hours} hour${plural}`);
  }

  if (minutes) {
    const plural = minutes > 1 ? 's' : '';
    dateTextArr.push(`${minutes} minute${plural}`);
  }

  const plural = seconds > 1 ? 's' : '';
  dateTextArr.push(`${seconds} second${plural}`);

  return (
    <p>
      {`${dateTextArr.join(', ')} until mint.`}
    </p>
  );
};

export default Countdown;
