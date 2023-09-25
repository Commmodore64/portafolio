import React from 'react'


const newsData = [
  {
    title: "New Web Design",
    date: "04 / 02 / 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.",
  },
  {
    title: "21 000 Job Seekers",
    date: "12 / 01 / 2022",
    description:
      "Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.",
  },
  {
    title: "Awesome Employers",
    date: "21 / 12 / 2021",
    description:
      "Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.",
  },
];

function skills() {
  return (
    <div className="pt-20 pl-12">
      <h2 className="text-4xl text-gray-700 font-bold mb-5 ml-3">Skills</h2>
      <ol>
        {newsData.map((news, index) => (
          <li key={index} className="border-l-2 border-purple-300">
            <div className="md:flex flex-start">
              <div className="bg-purple-300 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
                {/* Ícono */}
              </div>
              <div className="block p-6  shadow-lg border border-gray-400 max-w-md ml-6 mb-10">
                <div className="flex justify-between mb-4">
                  <a
                    href="#!"
                    className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                  >
                    {news.title}
                  </a>
                  <a
                    href="#!"
                    className="font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                  >
                    {news.date}
                  </a>
                </div>
                <p className="text-gray-700 mb-6">{news.description}</p>
                {/* <button
                  type="button"
                  className="inline-block px-4 py-1.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                >
                  Preview
                </button>
                <button
                  type="button"
                  className="inline-block px-3.5 py-1 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                >
                  See demo
                </button> */}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default skills
