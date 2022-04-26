import useDark from '../hooks/useDark'

export default function Footer() {
  const { isDark, toggleDark } = useDark()
  return (
    <div onClick={() => toggleDark()}>
      {isDark}
    </div>
  )
}
