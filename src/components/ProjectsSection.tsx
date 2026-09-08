import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Lock, Check, Play, RefreshCw, Terminal, Cpu } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'PYTHON' | 'C' | 'IOT'>('ALL');

  // Interactive states for the 4 project simulations
  // Project 1: ASCII Canvas shape toggle
  const [activeShape, setActiveShape] = useState<'all' | 'rect' | 'triangle' | 'circle'>('all');

  // Project 2: Guess number interactive simulation
  const [guessLow, setGuessLow] = useState<number>(1);
  const [guessHigh, setGuessHigh] = useState<number>(100);
  const [secretTarget, setSecretTarget] = useState<number>(42);
  const [guessStepCount, setGuessStepCount] = useState<number>(1);
  const [currentMid, setCurrentMid] = useState<number>(50);
  const [guessStatus, setGuessStatus] = useState<'searching' | 'found'>('searching');

  const handleNextBinaryStep = () => {
    if (currentMid === secretTarget) {
      setGuessStatus('found');
      return;
    }
    if (currentMid > secretTarget) {
      const newHigh = currentMid - 1;
      setGuessHigh(newHigh);
      const nextMid = Math.floor((guessLow + newHigh) / 2);
      setCurrentMid(nextMid);
      setGuessStepCount((s) => s + 1);
      if (nextMid === secretTarget) setGuessStatus('found');
    } else {
      const newLow = currentMid + 1;
      setGuessLow(newLow);
      const nextMid = Math.floor((newLow + guessHigh) / 2);
      setCurrentMid(nextMid);
      setGuessStepCount((s) => s + 1);
      if (nextMid === secretTarget) setGuessStatus('found');
    }
  };

  const resetGuessGame = () => {
    const newTarget = Math.floor(Math.random() * 90) + 5;
    setSecretTarget(newTarget);
    setGuessLow(1);
    setGuessHigh(100);
    setCurrentMid(50);
    setGuessStepCount(1);
    setGuessStatus('searching');
  };

  // Project 3: Movie review parser
  const [selectedReviewIdx, setSelectedReviewIdx] = useState<number>(0);
  const sampleReviews = [
    { text: 'Exceptional storyline, brilliant cinematography and stellar acting.', score: '4.8 / 5.0', sentiment: 'POSITIVE' },
    { text: 'Great practical effects though pacing felt slightly rushed.', score: '3.7 / 5.0', sentiment: 'BALANCED' },
    { text: 'Generic plot with predictable outcomes throughout the runtime.', score: '2.1 / 5.0', sentiment: 'CRITICAL' },
  ];

  // Project 4: Weather station live telemetry
  const [telemetry, setTelemetry] = useState({ temp: 24.2, humidity: 58, sample: 1000 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        temp: +(24.0 + Math.random() * 0.8).toFixed(1),
        humidity: Math.floor(57 + Math.random() * 3),
        sample: 1000,
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    return p.filterCategory === activeFilter;
  });

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-[#e2e2e5]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="font-editorial text-[12px] font-bold tracking-[0.15em] text-[#006a64] uppercase">
                03 // ARTIFACTS
              </span>
              <div className="h-[1px] w-12 sm:w-20 bg-[#bdc9c7]" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1c1e]">
                Things I've built
              </h2>
            </div>
            <p className="text-[14px] text-[#5a5f66] max-w-xl">
              A few projects I've worked on while learning, experimenting and building.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2" id="project-filters">
            {(['ALL', 'PYTHON', 'C', 'IOT'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                id={`filter-btn-${filter.toLowerCase()}`}
                className={`px-4 py-1.5 rounded-full text-[12px] font-editorial font-semibold tracking-wider transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#006a64] text-white shadow-2xs'
                    : 'bg-white border border-[#e2e2e5] text-[#5a5f66] hover:bg-[#f3f3f6] hover:text-[#1a1c1e]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-[#ffffff] rounded-xl border border-[#e2e2e5] p-6 sm:p-7 shadow-2xs hover:border-[#bdc9c7] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Card Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#f1f1f4] pb-3 text-[11px] font-editorial">
                  <span className="font-bold tracking-wider text-[#6e7978] uppercase">
                    {project.projectNumber}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#f3f3f6] text-[#2c3034] font-semibold text-[10px] tracking-wider uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1c1e] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[14px] text-[#5a5f66] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* VISUAL ARTIFACT CONTAINER BY TYPE */}
                {project.visualType === 'ascii-canvas' && (
                  <div className="bg-[#f9f9fc] border border-[#e8e8ea] rounded-lg p-4 font-mono text-[11px]">
                    <div className="flex items-center justify-between border-b border-[#e8e8ea] pb-2 mb-3">
                      <div className="flex items-center gap-2 text-[#5a5f66]">
                        <Terminal className="w-3.5 h-3.5 text-[#006a64]" />
                        <span className="font-semibold text-[#1a1c1e]">CANVAS 40×16 [ASCII BUFFER]</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#006a64] font-semibold text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#006a64] animate-pulse" />
                        RUNNING
                      </div>
                    </div>

                    {/* ASCII Frame */}
                    <div className="bg-white border border-[#e8e8ea] rounded p-3 text-[#2c3034] select-none overflow-x-auto leading-tight font-mono text-[11px]">
                      <div className="text-[#6e7978] mb-1">[2D VIEW]</div>
                      <div>| [ID#01 [RECT]]          ^</div>
                      <div>| ****************       / \</div>
                      <div>| *              *      /   \</div>
                      <div>| *              *     / [TRIANGLE] \</div>
                      <div>| * [CIRCLE] (o) *    /_____\ ID#04 |</div>
                      <div>| ****************</div>
                    </div>
                  </div>
                )}

                {project.visualType === 'binary-search' && (
                  <div className="bg-[#f9f9fc] border border-[#e8e8ea] rounded-lg p-4 font-editorial">
                    <div className="flex items-center justify-between border-b border-[#e8e8ea] pb-2 mb-3 text-[11px]">
                      <span className="font-semibold text-[#5a5f66] tracking-wider uppercase">
                        RANGE: [1 ... 100]
                      </span>
                      <span className="font-bold text-[#006a64] tracking-wider uppercase">
                        BINARY SEARCH FLOW
                      </span>
                    </div>

                    {/* Step Flow Blocks */}
                    <div className="bg-white border border-[#e8e8ea] rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
                      <div className="flex-1 w-full p-2.5 rounded bg-[#f9f9fc] border border-[#e8e8ea]">
                        <div className="text-[10px] text-[#6e7978] font-bold uppercase tracking-wider">LOW</div>
                        <div className="text-xl font-mono font-bold text-[#1a1c1e]">{guessLow.toString().padStart(2, '0')}</div>
                      </div>

                      <div className="text-[#006a64] font-bold">→</div>

                      <div className="flex-1 w-full p-2.5 rounded bg-[#f0f9f8] border border-[#006a64]/30">
                        <div className="text-[10px] text-[#006a64] font-bold uppercase tracking-wider">TARGET</div>
                        <div className="text-xl font-mono font-bold text-[#006a64]">
                          {guessStatus === 'found' ? secretTarget : `? (${currentMid})`}
                        </div>
                      </div>

                      <div className="text-[#006a64] font-bold">→</div>

                      <div className="flex-1 w-full p-2.5 rounded bg-[#f9f9fc] border border-[#e8e8ea]">
                        <div className="text-[10px] text-[#6e7978] font-bold uppercase tracking-wider">HIGH</div>
                        <div className="text-xl font-mono font-bold text-[#1a1c1e]">{guessHigh.toString().padStart(2, '0')}</div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[11px] text-[#6e7978]">
                      <span>Evaluation: Conditional branches, state retention & loops.</span>
                      <button
                        onClick={handleNextBinaryStep}
                        className="text-[11px] font-semibold text-[#006a64] hover:underline cursor-pointer flex items-center gap-1"
                      >
                        {guessStatus === 'found' ? 'Found!' : 'Step Logic →'}
                      </button>
                    </div>
                  </div>
                )}

                {project.visualType === 'text-parser' && (
                  <div className="bg-[#f9f9fc] border border-[#e8e8ea] rounded-lg p-4 font-editorial">
                    <div className="flex items-center justify-between border-b border-[#e8e8ea] pb-2 mb-3 text-[11px]">
                      <span className="font-semibold text-[#5a5f66] tracking-wider uppercase">
                        TEXT PROCESSOR
                      </span>
                      <span className="font-bold text-[#006a64] tracking-wider uppercase">
                        PARSER // V1
                      </span>
                    </div>

                    <div className="bg-white border border-[#e8e8ea] rounded p-3 space-y-2.5">
                      <div className="flex items-center justify-between text-[12px]">
                        <span className="text-[#2c3034] font-medium flex items-center gap-1.5">
                          <span className="font-mono text-[#6e7978]">[=]</span> Review Corpus Struct
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#006a64] font-semibold text-[11px]">
                          Parsed <Check className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[12px] pt-1 border-t border-[#f1f1f4]">
                        <span className="text-[#2c3034] font-medium flex items-center gap-1.5">
                          <span className="font-mono text-[#6e7978]">[=]</span> Score Classification
                        </span>
                        <span className="font-mono text-[11px] text-[#006a64] font-semibold bg-[#f0f9f8] px-2 py-0.5 rounded">
                          Scale [1..5]
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {project.visualType === 'weather-sensor' && (
                  <div className="bg-[#f9f9fc] border border-[#e8e8ea] rounded-lg p-4 font-editorial">
                    <div className="flex items-center justify-between border-b border-[#e8e8ea] pb-2 mb-3 text-[11px]">
                      <span className="font-semibold text-[#5a5f66] tracking-wider uppercase">
                        MCU NODE
                      </span>
                      <span className="font-mono font-bold text-[#006a64] tracking-wider uppercase">
                        ATmega328P / I2C
                      </span>
                    </div>

                    <div className="bg-white border border-[#e8e8ea] rounded-lg p-3 grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded bg-[#f9f9fc]">
                        <div className="text-[10px] text-[#6e7978] font-bold uppercase tracking-wider">TEMP</div>
                        <div className="text-base sm:text-lg font-mono font-bold text-[#1a1c1e]">{telemetry.temp}°C</div>
                      </div>
                      <div className="p-2 rounded bg-[#f9f9fc]">
                        <div className="text-[10px] text-[#6e7978] font-bold uppercase tracking-wider">HUMIDITY</div>
                        <div className="text-base sm:text-lg font-mono font-bold text-[#1a1c1e]">{telemetry.humidity}%</div>
                      </div>
                      <div className="p-2 rounded bg-[#f9f9fc]">
                        <div className="text-[10px] text-[#6e7978] font-bold uppercase tracking-wider">SAMPLE</div>
                        <div className="text-base sm:text-lg font-mono font-bold text-[#006a64]">{telemetry.sample}ms</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features & Concept List */}
                <div className="pt-2">
                  <div className="text-[10px] font-editorial font-bold tracking-[0.14em] text-[#6e7978] uppercase mb-2">
                    {project.featuresOrConceptsTitle}
                  </div>
                  <ul className="text-[13px] text-[#5a5f66] space-y-1.5">
                    {project.featuresOrConcepts.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#006a64] font-bold leading-none mt-1">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link / Bottom Footer */}
              <div className="pt-6 mt-6 border-t border-[#f1f1f4] flex items-center justify-between">
                {project.actionType === 'github' ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    id={`project-link-${project.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#006a64] text-white text-[12px] font-editorial font-semibold tracking-wider uppercase hover:bg-[#00504b] transition-all shadow-2xs"
                  >
                    VIEW ON GITHUB <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3f3f6] text-[#6e7978] text-[12px] font-editorial font-medium">
                      GITHUB — COMING SOON <Lock className="w-3 h-3 text-[#8f4c31]" />
                    </span>
                    {project.statusBadge && (
                      <span className="text-[11px] font-editorial text-[#5a5f66]">
                        {project.statusBadge}
                      </span>
                    )}
                  </div>
                )}

                {project.visualType === 'weather-sensor' && (
                  <div className="flex items-center gap-1.5 text-[11px] text-[#006a64] font-medium font-editorial">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006a64]" />
                    ACADEMIC PROJECT
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
