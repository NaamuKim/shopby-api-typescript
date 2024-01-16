import React from 'react';

interface Props {
  eventId: string;
}
export async function getServerSideProps({ params }: { params: Props }) {
  return {
    props: {
      eventId: params.eventId,
    },
  };
}

function Event({ eventId }: Props) {
  return <div>{eventId}</div>;
}
export default Event;
