import { BookOpen, Code2, Play } from 'lucide-react'

const lessons = [
  'React 컴포넌트 만들기',
  'Props와 State 이해하기',
  'Vite 개발 서버 사용하기',
]

function App() {
  return (
    <main className="app">
      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">React + Vite</p>
          <h1 id="page-title">Hello Coding Class</h1>
          <p className="intro">
            빠르게 실행하고, 고치고, 다시 확인할 수 있는 프론트엔드 기초
            프로젝트입니다.
          </p>
          <div className="actions">
            <a className="primary-action" href="https://vite.dev" target="_blank">
              <Play size={18} aria-hidden="true" />
              Vite 보기
            </a>
            <a className="secondary-action" href="https://react.dev" target="_blank">
              <BookOpen size={18} aria-hidden="true" />
              React 문서
            </a>
          </div>
        </div>

        <div className="code-panel" aria-label="실습 예시 코드">
          <div className="panel-header">
            <Code2 size={18} aria-hidden="true" />
            <span>src/App.jsx</span>
          </div>
          <pre>
            <code>{`function Greeting({ name }) {
  return <h2>안녕하세요, {name}!</h2>
}`}</code>
          </pre>
        </div>
      </section>

      <section className="lesson-list" aria-label="학습 주제">
        {lessons.map((lesson, index) => (
          <article className="lesson-card" key={lesson}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{lesson}</h2>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
