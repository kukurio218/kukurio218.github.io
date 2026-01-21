import { useState } from 'react'
import { PrivacySection } from '../../types/app'

interface PrivacyPolicyProps {
  sections: PrivacySection[]
}

export default function PrivacyPolicy({ sections }: PrivacyPolicyProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-base-50 rounded-lg border border-base-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-base-100 transition-colors rounded-lg"
      >
        <span className="font-medium text-base-800">
          プライバシーポリシーを{isExpanded ? '閉じる' : '表示する'}
        </span>
        <svg
          className={`w-5 h-5 text-base-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-6">
          {sections.map((section, index) => (
            <div key={index} className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-base-800 mb-2">{section.title}</h4>
              <p className="text-base-600 text-sm leading-relaxed mb-2">{section.content}</p>
              {section.items && (
                <ul className="space-y-1 text-sm text-base-600">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-base-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
