

const FrequentlyAskedQuestions = () => {
    return (
        <div>
            <div className=" md:w-3/4 lg:w-1/2 mx-auto mb-9">
              <h1 className="text-4xl font-bold text-center mb-5">Welcome to our Study Online FAQ</h1>
              <p className="text-base font-medium text-center">If you have questions, we have answers. This FAQ section is here to help you navigate our platform and find the information you need quickly and easily.</p>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" /> 

                    <div className="collapse-title text-xl font-medium">
                    What are the benefits of participating in study groups?
                    </div>

                    <div className="collapse-content"> 
                        <p>Answer: Study groups offer several benefits, including the opportunity to collaborate with peers, discuss challenging topics, share resources, and gain different perspectives on the subject matter. They can enhance your learning experience and help you stay motivated.</p>
                    </div>
            </div>


            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 

                <div className="collapse-title text-xl font-medium">
                Are study materials available for all subjects?
                </div>

                <div className="collapse-content"> 
                    <p>Answer: Yes, our study group website offers study materials for a wide range of subjects and topics. You can explore our library to find resources, including notes, videos, quizzes, and more, for various academic disciplines and professional courses.</p>
                </div>
            </div>


            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                Can I access study groups on a mobile device?
                </div>
                <div className="collapse-content"> 
                    <p>Answer: Yes, our study group website is mobile-responsive. You can access study groups, materials, and discussions on your smartphone or tablet by using our mobile app or simply visiting the website in your mobile browser. The mobile app is available for both iOS and Android devices.</p>
                </div>
            </div>


            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                How do I find study groups related to my specific course or topic?
                </div>
                <div className="collapse-content"> 
                    <p>Answer: To find study groups related to your course or topic, you can use the search feature on our website. Enter keywords, course names, or subjects, and you'll be presented with a list of relevant study groups. You can also filter and sort the results to narrow down your choices.</p>
                </div>
            </div>


            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                Is it free to join and participate in study groups?
                </div>
                <div className="collapse-content"> 
                    <p>Answer: Yes, joining and participating in most study groups on our website is free. However, some study groups may offer premium features or materials for a fee. Always check the group's details for any associated costs.</p>
                </div>
            </div>


            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                How can I invite friends or classmates to join a study group?
                </div>
                <div className="collapse-content"> 
                    <p>Answer: To invite friends or classmates to join a study group, navigate to the group's page and look for the "Invite Members" or "Share" option. You can share the group's link via email, social media, or other messaging platforms to invite others to join.</p>
                </div>
            </div>


        </div>
        
        

    );
};

export default FrequentlyAskedQuestions;