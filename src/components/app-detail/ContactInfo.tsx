import { contactEmail } from '../../data/apps'

export default function ContactInfo() {
  return (
    <div className="bg-base-50 p-4 rounded-lg border-l-4 border-accent-500">
      <p className="text-base-700 mb-2">
        アプリに関するお問い合わせは、以下の連絡先までお願いいたします。
      </p>
      <p className="text-base-800">
        <span className="font-medium">Email: </span>
        <a
          href={`mailto:${contactEmail}`}
          className="text-accent-600 hover:text-accent-700 hover:underline"
        >
          {contactEmail}
        </a>
      </p>
      <p className="text-base-500 text-sm mt-2">
        ※お問い合わせには数日お時間をいただく場合がございます。
      </p>
    </div>
  )
}
