const Total = ({ parts }) => {
  const sum_of_exercises = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)
  return <strong>total of {sum_of_exercises} exercises</strong>
}
const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}
const Content = ({ parts }) => {
  return (
    <>
      {parts.map(({ id, name, exercises }) => (
        <Part key={id} name={name} exercises={exercises} />
      ))}
      <Total parts={parts} />
    </>
  )
}
const Header = ({ name }) => {
  return <h2>{name}</h2>
}

const Course = ({ course }) => {
  const { name, parts } = course
  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
    </>
  )
}

export default Course
