import { useState, lazy } from 'react';
import { FormConfig } from './type';


const Form = lazy(() => import('./Form/Form'));

const FormPage: React.FC = () => {
    const [formConfig, setFormConfig] = useState<FormConfig>(
        {
            numberInputs: 0,
            numberTextarea: 0,
            numberCheckboxes: 0
        }
    );

    const [isShowForm, setIsShowForm] = useState<boolean>(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormConfig({ ...formConfig, [name]: +value });
    };

    const showForm = (): void => {
        setIsShowForm(true);
    }

    return (
        <div className='container min-h-screen mx-auto py-4 px-2 flex flex-col items-center'>
            <div className='max-w-120'>
                <div className='mb-4 w flex gap-5 items-center justify-between'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Input:
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='number'
                        name='numberInputs'
                        value={formConfig.numberInputs}
                        onChange={handleOnChange}
                        min={0}
                    />
                </div>
                <div className='mb-4 flex gap-5 items-center justify-between'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Textarea:
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='number'
                        name='numberTextarea'
                        value={formConfig.numberTextarea}
                        onChange={handleOnChange}
                        min={0}
                    />
                </div>
                <div className='mb-4 flex gap-5 items-center justify-between'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Checkbox:
                    </label>
                    <input
                        className='shadow appearance-none border rounded w-60 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        type='number'
                        name='numberCheckboxes'
                        value={formConfig.numberCheckboxes}
                        onChange={handleOnChange}
                        min={0}
                    />
                </div>
                <button
                    className='mt-4 bg-blue-500 hover:bg-blue-700 disabled:bg-blue-200 text-white font-bold py-2 px-4 rounded disabled'
                    onClick={showForm}
                    disabled={!formConfig.numberInputs && !formConfig.numberTextarea && !formConfig.numberCheckboxes}
                >
                    Build
                </button>
            </div>
            {
                isShowForm &&
                <Form
                    formConfig={formConfig}
                />
            }
        </div>
    );
};

export default FormPage;