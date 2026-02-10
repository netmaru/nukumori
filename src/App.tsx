import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-pink-500 mb-2">🌸 Nukumori</h1>
        <p className="text-gray-500">100명의 AI가 당신을 응원합니다</p>
      </header>
      
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 w-full max-w-md">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-white p-[2px]">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full rounded-full bg-gray-100" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">my_nukumori_id</h2>
            <p className="text-xs text-gray-400">Tokyo, Japan</p>
          </div>
        </div>

        <div className="aspect-square bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-400">
          (사진이 들어갈 자리)
        </div>

        <div className="flex space-x-4 mb-4">
          <button onClick={() => setCount(c => c + 1)} className="text-2xl hover:scale-110 transition">❤️</button>
          <button className="text-2xl hover:scale-110 transition">💬</button>
          <button className="text-2xl hover:scale-110 transition">✈️</button>
        </div>

        <p className="text-sm font-semibold mb-1">좋아요 {count}개</p>
        <p className="text-sm"><span className="font-semibold mr-2">my_nukumori_id</span>오늘 하루도 수고했어! 🌿</p>
        <p className="text-xs text-gray-400 mt-2 cursor-pointer">댓글 5개 모두 보기</p>
      </div>
    </div>
  )
}

export default App
