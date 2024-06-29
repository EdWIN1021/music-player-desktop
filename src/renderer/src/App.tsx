function App(): JSX.Element {
  const handleClick = (): void => {
    window.api.uploadSong()
  }

  return <button onClick={handleClick}>Click</button>
}

export default App
