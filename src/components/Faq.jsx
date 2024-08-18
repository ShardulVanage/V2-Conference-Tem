import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "How many tickets are in Company Pass?",
    answer: "Please contact us for more information about Company Pass tickets.",
  },
  {
    question: "Is there an after party / networking event?",
    answer: "Yes, Zep Research features an after-party and networking events. Check the event schedule for details.",
  },
  {
    question: "Do you offer additional discounts?",
    answer: "Discounts may be available for students, military personnel, or groups. Contact us for more information.",
  },
  {
    question: "Who attends Zep Research?",
    answer: "Researchers, professionals, and industry experts attend Zep Research.",
  },
  {
    question: "I need a visa to attend, can you send me an invitation letter?",
    answer: "Please contact us with your ticket confirmation and visa requirements, and we'll assist with an invitation letter.",
  },
  {
    question: "How can I purchase a ticket bundle?",
    answer: "Contact us for information on purchasing ticket bundles or Company Passes.",
  },
  {
    question: "Can I get a refund if I am not able to attend?",
    answer: "Refund policies vary; please review your ticket purchase terms or contact us for assistance.",
  },
  {
    question: "Can I transfer my ticket to another person?",
    answer: "Ticket transfers may be possible; contact us for assistance with transfers.",
  },
  {
    question: "Where is the conference venue?",
    answer: "Check the event schedule or contact us for information on the conference venue.",
  },
  {
    question: "Which ticket type is for me?",
    answer: "Review our ticket options and contact us if you need help selecting the right ticket type.",
  },
  {
    question: "Can I speak or propose a speaker for Zep Research?",
    answer: "Submit your speaker proposal through our website or contact us for more information.",
  },
  {
    question: "Do you accept crypto payment?",
    answer: "Please contact us for information on accepted payment methods.",
  },
  // More questions...
]

export default function Faq() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6  py-8 pt-20">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-5xl font-bold leading-10 tracking-tight text-gray-900">Frequently Asked Questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
