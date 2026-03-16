type Props = {
  items: {
    label: string
    href?: string
  } []
}
  

const Breadcrumb = ({ items }: Props) => {
  return (
    <nav className="text-1xl text-gray-500">
      <ol className="flex items-center space-x-2">
    
        {items.map((item, index) => {
          const isLast = (index === items.length - 1)
          return (
            <div key={index} className="flex items-center space-x-2">
              <li>
                {isLast ? (
                  // The last item
                  <span className="font-medium text-gray-900">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    className="hover:text-gray-700 hover:underline"
                  >
                    {item.label}
                  </a>
                )}
              </li>

              {/* Seperater */}
              {!isLast && (
                <li className="text-gray-400">{">"}</li>
              )}

            </div>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb