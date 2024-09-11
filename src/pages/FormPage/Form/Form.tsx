import { FormConfig } from "../type";


type FormProps = {
    formConfig: FormConfig
}

const Form: React.FC<FormProps> = ({ formConfig }) => {
    const { numberInputs, numberTextarea, numberCheckboxes } = formConfig;

    return (
        <div className='mt-10 flex gap-5'>
            {
                numberInputs > 0 &&
                <div className='flex flex-col gap-2'>
                    <h3 className='text-gray-700 text-sm font-bold'>Input</h3>
                    {
                        Array(numberInputs).fill('').map((_, index) => {
                            return (
                                <input
                                    key={index}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                />
                            )
                        })
                    }
                </div>
            }
            {
                numberTextarea > 0 &&
                <div className='flex flex-col gap-2'>
                    <h3 className='text-gray-700 text-sm font-bold'>Textarea</h3>
                    {
                        Array(numberTextarea).fill('').map((_, index) => {
                            return (
                                <textarea
                                    key={index}
                                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                />
                            )
                        })
                    }
                </div>
            }
            {
                numberCheckboxes > 0 &&
                <div>
                    <h3 className='text-gray-700 text-sm font-bold'>Checkbox</h3>
                    {
                        Array(numberCheckboxes).fill('').map((_, index) => {
                            return (
                                <input key={index}
                                    className='mr-2 leading-tight'
                                    type='checkbox'
                                />
                            )
                        })
                    }
                </div>
            }
        </div>
    );
};

export default Form;