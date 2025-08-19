import NetworkStatus from '../components/NetworkStatus';
import PageClient from './PageClient';

export default async function RatedPAge() {
  return (
    <>
      <NetworkStatus />
      <PageClient />
    </>
  );
}
