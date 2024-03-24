const load = async (events) => {
  return {
    user: events.locals.user
  };
};
export {
  load
};
