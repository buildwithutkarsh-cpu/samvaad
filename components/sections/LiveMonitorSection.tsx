/* Brutalist/Industrial Live Stream Console matching Web_2.jpg rules */
'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Radio, Terminal, Settings, Activity, Sliders, Play, Square, AlertCircle } from 'lucide-react'

export default function LiveMonitorSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  
  // Configuration states for backend coordination
  const [serverUrl, setServerUrl] = useState('http://127.0.0.1:8000')
  const [isStreaming, setIsStreaming] = useState(true)
  const [inferenceLatency, setInferenceLatency] = useState(12)
  const [confidence, setConfidence] = useState(94.8)
  const [activeToken, setActiveToken] = useState('SPACE')

  // Mock processing cycle to simulate live model activity on metadata panels
  useEffect(() => {
    if (!isStreaming) return
    const interval = setInterval(() => {
      setInferenceLatency(Math.floor(Math.random() * 8) + 9) // 9ms - 16ms
      setConfidence(parseFloat((92 + Math.random() * 7).toFixed(1)))
    }, 800)
    return () => clearInterval(interval)
  }, [isStreaming])

  return (
    <section id="live-monitor" className="relative py-24 bg-[#ececec] text-[#0a0a0a] border-b-2 border-[#0a0a0a] font-sans overflow-hidden select-none">
      
      {/* Structural Top Metadata Strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center border-b border-[#0a0a0a]/10 pb-6 mb-16 font-mono text-[10px] tracking-widest uppercase font-bold text-[#0a0a0a]/60">
        <div className="flex items-center gap-2 text-[#ff3e18] animate-pulse">
          <Radio className="w-3.5 h-3.5" /> [ stream_node_active ]
        </div>
        <div>tflite_inference_runtime // v1.0.2</div>
        <div className="hidden sm:block">device: host_remote</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Core Layout Header */}
        <div ref={ref} className="border-b-2 border-[#0a0a0a] pb-10 mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#ff3e18] mb-3">// LIVE_TELEMETRY</h4>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tighter lowercase leading-[0.85] text-[#0a0a0a]">
              real-time sign <br />
              <span className="text-[#ff3e18]">interpretation matrix.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="max-w-md w-full flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-sans text-sm font-medium leading-relaxed text-[#0a0a0a]/80 border-l-2 border-[#ff3e18] pl-4 py-1">
              direct intercept capture mapping local mediapipe hand structures into deep localized tflite matrix layers. set your active target endpoint below.
            </p>
          </motion.div>
        </div>

        {/* Console Infrastructure Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-[#0a0a0a] bg-white shadow-[8px_8px_0px_0px_#0a0a0a]">
          
          {/* Index Sidebar Panel */}
          <div className="lg:col-span-1 border-r-2 border-[#0a0a0a] bg-[#ececec] flex lg:flex-col justify-between items-center py-6 px-4 lg:py-12">
            <span className="font-mono text-[10px] font-black tracking-widest text-[#ff3e18] uppercase [writing-mode:vertical-lr] lg:rotate-180">[ core_mjpeg_stream ]</span>
            <div className="text-4xl md:text-5xl font-display font-black tracking-tighter text-[#0a0a0a] lg:[writing-mode:vertical-lr] lg:rotate-180 leading-none">
              005
            </div>
          </div>

          {/* Central Video Stream Box Viewport */}
          <div className="lg:col-span-7 bg-[#0a0a0a] p-2 flex flex-col justify-between relative border-b-2 lg:border-b-0 lg:border-r-2 border-[#0a0a0a] min-h-[400px]">
            <div className="absolute top-4 left-4 z-20 font-mono text-[9px] font-bold tracking-wider text-white/50 bg-[#0a0a0a]/80 px-2 py-1 border border-white/10">
              video_feed_canvas // 640x480
            </div>

            {/* Simulated crosshairs styling for the lens container */}
            <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-white/20 pointer-events-none z-20" />
            <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-white/20 pointer-events-none z-20" />
            <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-white/20 pointer-events-none z-20" />

            <div className="flex-1 w-full flex items-center justify-center bg-[#111] overflow-hidden relative group">
              {isStreaming ? (
                /* Blends directly to the dynamic multi-part server output route */
                <img 
                  src={`${serverUrl}/mjpeg`} 
                  alt="Live annotated camera telemetry stream"
                  className="w-full h-full object-contain grayscale font-mono text-xs text-white/40 text-center p-12"
                  onError={(e) => {
                    // Fallback visual feedback if server path goes offline
                    e.currentTarget.style.display = 'none'
                    const errEl = document.getElementById('stream-error')
                    if (errEl) errEl.style.display = 'flex'
                  }}
                />
              ) : (
                <div className="font-mono text-xs text-white/40 uppercase tracking-wider flex flex-col items-center gap-3">
                  <Square className="w-6 h-6 text-[#ff3e18]" />
                  [ feed_pipeline_suspended ]
                </div>
              )}

              {/* Hardware Link Fault Handler Container */}
              <div 
                id="stream-error" 
                className="absolute inset-0 hidden flex-col items-center justify-center bg-[#0a0a0a] p-8 text-center"
              >
                <AlertCircle className="w-8 h-8 text-[#ff3e18] mb-3" />
                <span className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-1">[ target_intercept_offline ]</span>
                <p className="font-sans text-[11px] text-white/60 max-w-xs">
                  could not connect to endpoint at <span className="text-[#ff3e18] font-mono">{serverUrl}</span>. verify <code className="bg-white/10 px-1 font-mono text-white">server.py</code> execution loop is running.
                </p>
              </div>
            </div>

            {/* Industrial Processing Bar Bottom Drawer */}
            <div className="bg-[#ff3e18] p-4 text-white border-t-2 border-[#0a0a0a] flex items-center justify-between mt-2 mx-1 mb-1">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsStreaming(!isStreaming)}
                  className="bg-[#0a0a0a] text-white border-0 rounded-none px-4 py-2 font-mono text-[10px] uppercase font-bold tracking-wider hover:bg-white hover:text-[#0a0a0a] transition-colors flex items-center gap-2"
                >
                  {isStreaming ? (
                    <>
                      <Square className="w-3 h-3 fill-current text-[#ff3e18]" /> halt_stream
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-current text-green-500" /> boot_stream
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest font-bold opacity-90 hidden sm:block">
                frame_receiver: operational_loop
              </div>
            </div>
          </div>

          {/* Right Metrics Control Panel Column */}
          <div className="lg:col-span-4 bg-white flex flex-col justify-between divide-y-2 divide-[#0a0a0a]">
            
            {/* Live Predictor Target Monitoring Slate */}
            <div className="p-6 bg-[#ececec]/30">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold text-[#0a0a0a]/50 mb-4">
                <Terminal className="w-3.5 h-3.5 text-[#ff3e18]" /> // active_classification
              </div>
              <div className="bg-[#0a0a0a] text-white p-6 border border-[#0a0a0a] relative overflow-hidden">
                <span className="absolute bottom-1 right-2 font-mono text-[8px] opacity-20">stdout_stream</span>
                <div className="text-xs font-mono text-[#ff3e18] mb-1">token_output_char:</div>
                <div className="text-6xl font-display font-black tracking-tighter text-white animate-pulse">
                  {isStreaming ? activeToken : '---'}
                </div>
              </div>
            </div>

            {/* Core Operational Telemetry Stats Matrix */}
            <div className="p-6 grid grid-cols-2 gap-4">
              <div className="border border-[#0a0a0a]/10 p-3 bg-white">
                <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase font-bold text-[#0a0a0a]/50 mb-1">
                  <Activity className="w-3 h-3 text-[#ff3e18]" /> latency
                </div>
                <div className="text-2xl font-display font-black tracking-tight text-[#0a0a0a]">
                  {isStreaming ? `${inferenceLatency}ms` : '--'}
                </div>
                <span className="font-mono text-[8px] opacity-40 uppercase">matrix_calc_time</span>
              </div>

              <div className="border border-[#0a0a0a]/10 p-3 bg-white">
                <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase font-bold text-[#0a0a0a]/50 mb-1">
                  <Sliders className="w-3 h-3 text-[#ff3e18]" /> confidence
                </div>
                <div className="text-2xl font-display font-black tracking-tight text-[#0a0a0a]">
                  {isStreaming ? `${confidence}%` : '--'}
                </div>
                <span className="font-mono text-[8px] opacity-40 uppercase">model_accuracy</span>
              </div>
            </div>

            {/* Networking Endpoint Configuration Block */}
            <div className="p-6 bg-white flex-1 flex flex-col justify-end">
              <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase font-bold text-[#0a0a0a]/50 mb-3">
                <Settings className="w-3.5 h-3.5 text-[#ff3e18]" /> interface_routing_target
              </div>
              
              <div className="flex gap-0 border-2 border-[#0a0a0a]">
                <input 
                  type="text" 
                  value={serverUrl}
                  onChange={(e) => setServerUrl(e.target.value)}
                  placeholder="http://127.0.0.1:8000"
                  className="flex-1 px-3 py-2 bg-[#ececec]/40 font-mono text-xs font-medium text-[#0a0a0a] focus:outline-none placeholder-[#0a0a0a]/30 rounded-none border-0"
                />
                <button 
                  onClick={() => {
                    setIsStreaming(false)
                    setTimeout(() => setIsStreaming(true), 150)
                  }}
                  className="bg-[#0a0a0a] text-white px-4 font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-[#ff3e18] transition-colors border-0 rounded-none"
                >
                  bind
                </button>
              </div>
              <span className="font-mono text-[8px] text-[#0a0a0a]/40 uppercase mt-2">
                points directly to fastapi runtime address instance
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}