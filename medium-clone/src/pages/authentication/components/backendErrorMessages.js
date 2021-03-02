const BackendErrorMessages = ({backendErrors}) => {
  const errorMessages = Object.keys(backendErrors).map(name => {
    const message = backendErrors[name].join('');
    return `${name} ${message}`;
  });

  return (
    <ul className='error-messages'>
      {errorMessages.map(el => (
        <li key={el}>
          {el}
        </li>
      ))}
    </ul>
  );
};

export default BackendErrorMessages;
