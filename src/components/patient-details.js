import Image from "next/image"

export function PatientDetails() {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md sticky top-8">
            <Image src="/toha.jpeg?height=400&width=400" alt="Toha&apos;s photo" fill className="object-fill" />
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="bg-white p-6 rounded-xl shadow-md h-full">
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-medium">Age: 6 years</span>
              </div>
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-medium">Diagnosis: Congenital Heart Defect</span>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-full">
                <span className="text-amber-700 font-medium">Operation Date: April 15, 2025</span>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              Toha is a bright, cheerful 6-year-old who loves drawing, playing with his dolls, and dreams of becoming a
              doctor someday. He was diagnosed with a congenital heart defect shortly after birth and has been under
              medical supervision since then.
            </p>
            <p className="text-gray-700 mb-4">
              Recently, his condition has worsened, and doctors have advised that he needs an urgent operation to
              repair his heart. This surgery is critical for his survival and to give him a chance at a normal, healthy
              life.
            </p>
            <p className="text-gray-700 font-medium">
              The total cost of the operation, hospital stay, and post-operative care is estimated at Tk 5,000,000. Toha&apos;s
              family and friends have managed to raise Tk 1,500,000 so far, but they need your help to reach the full amount.
            </p>
            <p className="text-gray-700 font-medium">
              Your support will make a significant difference in Toha&apos;s life and help him lead a healthier, happier life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
