import GitHub from './icons/GitHub'

export default function Nav() {
  return (
    <nav>
      <div className="flex items-center justify-end p-8">
        <ul className="flex items-center justify-between space-x-4">
          <li>
            <a href="https://github.com/mountiny/shopify-challenge-fe" className="no-underline btn-blue" target="_blank">
              <GitHub />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}