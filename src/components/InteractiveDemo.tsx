import { useState, useEffect } from "react";
import { Brain, Zap, Target, RotateCcw, Trophy, Star, Clock } from "lucide-react";

const InteractiveDemo = () => {
  const [currentGame, setCurrentGame] = useState('memory');
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('waiting');
  const [timeLeft, setTimeLeft] = useState(30);

  // Memory Game State
  const [memoryCards, setMemoryCards] = useState([]);
  const [revealedCards, setRevealedCards] = useState([]);
  const [userSequence, setUserSequence] = useState([]);

  // Pattern Game State
  const [pattern, setPattern] = useState([]);
  const [userPattern, setUserPattern] = useState([]);

  // Math Game State
  const [mathProblem, setMathProblem] = useState({ a: 0, b: 0, answer: 0 });
  const [userAnswer, setUserAnswer] = useState('');

  const games = [
    { 
      id: 'memory', 
      title: 'Memory Master', 
      icon: Brain, 
      color: 'bg-blue-500',
      description: 'Remember sequences and boost working memory',
      benefit: 'Improves focus & attention span'
    },
    { 
      id: 'pattern', 
      title: 'Pattern Detective', 
      icon: Target, 
      color: 'bg-purple-500',
      description: 'Recognize patterns and develop logical thinking',
      benefit: 'Enhances problem-solving skills'
    },
    { 
      id: 'math', 
      title: 'Quick Calculator', 
      icon: Zap, 
      color: 'bg-green-500',
      description: 'Solve math problems at lightning speed',
      benefit: 'Builds numerical fluency'
    }
  ];

  // Timer effect for games
  useEffect(() => {
    let timer;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('completed');
    }
    return () => clearTimeout(timer);
  }, [gameState, timeLeft]);

  const startMemoryGame = () => {
    const sequence = Array.from({ length: 4 }, () => Math.floor(Math.random() * 4));
    setMemoryCards(sequence);
    setRevealedCards(sequence);
    setGameState('playing');
    setTimeLeft(30);
    
    // Hide cards after 2 seconds
    setTimeout(() => {
      setRevealedCards([]);
    }, 2000);
  };

  const startPatternGame = () => {
    const newPattern = Array.from({ length: 5 }, () => Math.floor(Math.random() * 3));
    setPattern(newPattern);
    setUserPattern([]);
    setGameState('playing');
    setTimeLeft(30);
  };

  const startMathGame = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setMathProblem({ a, b, answer: a + b });
    setUserAnswer('');
    setGameState('playing');
    setTimeLeft(30);
  };

  const handleMemoryCardClick = (index) => {
    if (gameState !== 'playing' || revealedCards.length > 0) return;
    
    const newUserSequence = [...userSequence, index];
    setUserSequence(newUserSequence);

    if (newUserSequence.length === memoryCards.length) {
      const isCorrect = newUserSequence.every((card, i) => card === memoryCards[i]);
      if (isCorrect) {
        setScore(prev => prev + Math.max(10, timeLeft));
      }
      setGameState('completed');
    }
  };

  const handlePatternClick = (colorIndex) => {
    if (gameState !== 'playing') return;
    
    const newUserPattern = [...userPattern, colorIndex];
    setUserPattern(newUserPattern);

    if (newUserPattern.length === pattern.length) {
      const isCorrect = newUserPattern.every((color, i) => color === pattern[i]);
      if (isCorrect) {
        setScore(prev => prev + Math.max(15, timeLeft));
      }
      setGameState('completed');
    }
  };

  const handleMathSubmit = () => {
    const isCorrect = parseInt(userAnswer) === mathProblem.answer;
    if (isCorrect) {
      setScore(prev => prev + Math.max(20, timeLeft * 2));
    }
    setGameState('completed');
  };

  const resetGame = () => {
    setGameState('waiting');
    setUserSequence([]);
    setUserPattern([]);
    setUserAnswer('');
    setRevealedCards([]);
    setTimeLeft(30);
  };

  const startGame = () => {
    resetGame();
    switch (currentGame) {
      case 'memory':
        startMemoryGame();
        break;
      case 'pattern':
        startPatternGame();
        break;
      case 'math':
        startMathGame();
        break;
    }
  };

  const currentGameData = games.find(g => g.id === currentGame);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-blue-50 via-white to-purple-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <Brain size={16} className="text-blue-600" />
            <span className="text-xs sm:text-sm font-semibold text-blue-700">Interactive Demo</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Experience the
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent block sm:inline sm:ml-3">
              Brain-Boosting Alternative
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Instead of mindless scrolling, your child could be solving puzzles, recognizing patterns, 
            and building cognitive skills. Try these sample games now!
          </p>
        </div>

        {/* Game Selector Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {games.map((game) => (
            <div
              key={game.id}
              onClick={() => setCurrentGame(game.id)}
              className={`
                group relative cursor-pointer rounded-2xl p-4 sm:p-6 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl
                ${currentGame === game.id 
                  ? `${game.color} text-white shadow-lg transform scale-105` 
                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 shadow-sm'
                }
              `}
            >
              <div className="text-center space-y-3 sm:space-y-4">
                <div className={`
                  w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110
                  ${currentGame === game.id ? 'bg-white/20' : 'bg-gray-100'}
                `}>
                  <game.icon size={24} className={currentGame === game.id ? 'text-white' : 'text-gray-600'} />
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{game.title}</h3>
                  <p className={`text-xs sm:text-sm mb-2 sm:mb-3 ${
                    currentGame === game.id ? 'text-white/90' : 'text-gray-500'
                  }`}>
                    {game.description}
                  </p>
                  <div className={`text-xs font-semibold ${
                    currentGame === game.id ? 'text-white' : 'text-gray-600'
                  }`}>
                    ✨ {game.benefit}
                  </div>
                </div>
              </div>
              
              {currentGame === game.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Score & Timer Display */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
          <div className="flex items-center gap-3 bg-white rounded-2xl px-4 sm:px-6 py-3 shadow-lg border border-gray-200">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="font-bold text-lg sm:text-xl text-gray-800">Score: {score}</span>
          </div>
          
          {gameState === 'playing' && (
            <div className="flex items-center gap-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl px-4 sm:px-6 py-3 shadow-lg border border-orange-200">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="font-bold text-lg sm:text-xl text-orange-700">Time: {timeLeft}s</span>
            </div>
          )}
        </div>

        {/* Main Game Area */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          
          {/* Game Header */}
          <div className={`${currentGameData?.color} p-4 sm:p-6 text-white`}>
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <currentGameData.icon className="w-6 sm:w-8 h-6 sm:h-8" />
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{currentGameData?.title}</h3>
            </div>
          </div>
          
          {/* Game Content */}
          <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            
            {/* Memory Game */}
            {currentGame === 'memory' && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center space-y-2 sm:space-y-4">
                  <p className="text-base sm:text-lg text-gray-600 font-medium">
                    {gameState === 'waiting' && "🧠 Remember the sequence of colors that light up!"}
                    {gameState === 'playing' && revealedCards.length > 0 && "👀 Watch carefully and memorize this sequence..."}
                    {gameState === 'playing' && revealedCards.length === 0 && "🎯 Now click the cards in the same order!"}
                    {gameState === 'completed' && "🎉 Round complete! Your memory skills are improving!"}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-md mx-auto">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      onClick={() => handleMemoryCardClick(index)}
                      className={`
                        aspect-square rounded-2xl transition-all duration-300 transform hover:scale-105 border-2
                        ${revealedCards.includes(index) || memoryCards[index] !== undefined
                          ? ['bg-blue-500 border-blue-600', 'bg-purple-500 border-purple-600', 'bg-green-500 border-green-600', 'bg-red-500 border-red-600'][memoryCards[index]] || 'bg-gray-200 border-gray-300'
                          : 'bg-gray-200 border-gray-300 hover:bg-gray-300'
                        }
                        ${gameState === 'completed' ? 'cursor-default' : 'cursor-pointer'}
                      `}
                      disabled={gameState === 'completed'}
                    >
                      {revealedCards.includes(index) && (
                        <div className="w-full h-full flex items-center justify-center">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pattern Game */}
            {currentGame === 'pattern' && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center space-y-2 sm:space-y-4">
                  <p className="text-base sm:text-lg text-gray-600 font-medium">
                    {gameState === 'waiting' && "🎨 Match the color pattern by clicking in the correct sequence!"}
                    {gameState === 'playing' && "🎯 Click the colors below to recreate the pattern above."}
                    {gameState === 'completed' && "🌟 Pattern mastered! You're developing great logical thinking!"}
                  </p>
                </div>
                
                {gameState !== 'waiting' && (
                  <div className="space-y-6 sm:space-y-8">
                    {/* Target Pattern */}
                    <div className="text-center space-y-3 sm:space-y-4">
                      <p className="text-sm sm:text-base font-semibold text-gray-700">🎯 Target Pattern:</p>
                      <div className="flex justify-center gap-2 sm:gap-3">
                        {pattern.map((color, index) => (
                          <div
                            key={index}
                            className={`w-8 sm:w-10 h-8 sm:h-10 rounded-xl shadow-md ${
                              ['bg-blue-500', 'bg-purple-500', 'bg-green-500'][color]
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Color Buttons */}
                    <div className="flex justify-center gap-4 sm:gap-6">
                      {[0, 1, 2].map((colorIndex) => (
                        <button
                          key={colorIndex}
                          onClick={() => handlePatternClick(colorIndex)}
                          className={`
                            w-16 sm:w-20 h-16 sm:h-20 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg border-4 border-white
                            ${['bg-blue-500 hover:bg-blue-600', 'bg-purple-500 hover:bg-purple-600', 'bg-green-500 hover:bg-green-600'][colorIndex]}
                            ${gameState === 'completed' ? 'cursor-default opacity-75' : 'cursor-pointer'}
                          `}
                          disabled={gameState === 'completed'}
                        />
                      ))}
                    </div>
                    
                    {/* User Pattern */}
                    <div className="text-center space-y-3 sm:space-y-4">
                      <p className="text-sm sm:text-base font-semibold text-gray-700">✨ Your Pattern:</p>
                      <div className="flex justify-center gap-2 sm:gap-3 min-h-10">
                        {userPattern.map((color, index) => (
                          <div
                            key={index}
                            className={`w-8 sm:w-10 h-8 sm:h-10 rounded-xl shadow-md animate-pulse ${
                              ['bg-blue-500', 'bg-purple-500', 'bg-green-500'][color]
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Math Game */}
            {currentGame === 'math' && (
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center space-y-2 sm:space-y-4">
                  <p className="text-base sm:text-lg text-gray-600 font-medium">
                    {gameState === 'waiting' && "🔢 Solve math problems quickly to boost your numerical skills!"}
                    {gameState === 'playing' && "⚡ What's the answer? Think fast!"}
                    {gameState === 'completed' && "🎯 Great calculation! Your math skills are getting stronger!"}
                  </p>
                </div>
                
                {gameState !== 'waiting' && (
                  <div className="text-center space-y-6 sm:space-y-8">
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 bg-gray-100 rounded-3xl py-6 sm:py-8 px-4">
                      {mathProblem.a} + {mathProblem.b} = ?
                    </div>
                    
                    {gameState === 'playing' && (
                      <div className="space-y-4 sm:space-y-6">
                        <input
                          type="number"
                          value={userAnswer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          placeholder="Your answer"
                          className="w-32 sm:w-40 h-12 sm:h-16 text-center text-xl sm:text-2xl font-bold bg-gray-50 border-2 border-gray-300 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                          onKeyPress={(e) => e.key === 'Enter' && userAnswer && handleMathSubmit()}
                          autoFocus
                        />
                        <div>
                          <button 
                            onClick={handleMathSubmit}
                            disabled={!userAnswer}
                            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                          >
                            Submit Answer
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {gameState === 'completed' && (
                      <div className="space-y-3 sm:space-y-4">
                        <div className="text-3xl sm:text-4xl font-bold text-blue-600 bg-blue-50 rounded-2xl py-4 px-6">
                          Answer: {mathProblem.answer}
                        </div>
                        <div className={`text-xl sm:text-2xl font-bold ${
                          parseInt(userAnswer) === mathProblem.answer ? 'text-green-600' : 'text-orange-600'
                        }`}>
                          {parseInt(userAnswer) === mathProblem.answer ? '🎉 Correct! Amazing work!' : '💪 Keep practicing! You\'re getting better!'}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Game Controls */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
              {gameState === 'waiting' && (
                <button 
                  onClick={startGame}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-2xl text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  🚀 Start Playing
                </button>
              )}
              
              {(gameState === 'playing' || gameState === 'completed') && (
                <button 
                  onClick={resetGame}
                  className="flex items-center gap-3 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl text-base sm:text-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 sm:mt-12 space-y-4 sm:space-y-6">
          <p className="text-lg sm:text-xl text-gray-600">
            This is just a tiny sample of our 50+ brain-boosting games!
          </p>
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 sm:px-12 rounded-2xl text-lg sm:text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            🎮 Access Full Game Library
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;