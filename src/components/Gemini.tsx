'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactMarkdown from 'react-markdown';
import { zodResolver } from '@hookform/resolvers/zod';

import { PromptResponse } from '@/lib/types';
import { PromptRequest, PromptValidator } from '@/lib/utils';

import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Separator } from './ui/separator';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';
import { RatingBar } from './ui/rating-bar';

export const dynamic = 'force-dynamic';

export default function Gemini() {
	const [isLoading, setIsLoading] = useState(false);
	const [responseData, setResponseData] = useState<PromptResponse | null>(null);

	const form = useForm<PromptRequest>({
		resolver: zodResolver(PromptValidator),
	});

	async function onSubmit(value: PromptRequest) {
		try {
			setIsLoading(true);
			const data = PromptValidator.safeParse(value);

			if (!data.success) {
				return;
			}

			const response = await fetch(`/api/google`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data.data),
				cache: 'no-store',
			});

			if (!response.ok) {
				console.error(response.statusText[0]);
				return;
			}

			const json = await response.json();
			setResponseData(JSON.parse(json.candidates[0].content.parts[0].text));
		} catch (error) {
			console.log(
				(error as Error).message ||
					'An error occurred while connecting to the model.'
			);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<main className='flex flex-col items-center w-full mx-auto py-10 px-6 space-y-4'>
			<h1 className='scroll-m-20 text-3xl text-center font-extrabold tracking-tight lg:text-5xl text-gray-900'>
			Search diseases & conditions
			</h1>
			<p className='font-semibold scroll-m-20 text-center text-xl'>
				Ask, Symptoms, GenerateAnswers ⚡
			</p>

			<div className='w-full '>
				<Separator className='bg-gray-900' />
			</div>

			<div className='grid md:grid-cols-2 grid-cols-1 w-full md:gap-8 sm:gap-4 gap-0'>
				<div className='col-span-1'>
					<Card className='md:p-6 p-2'>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='w-full space-y-4'
							>
								<FormField
									control={form.control}
									name='prompt'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='font-bold'>Ask </FormLabel>
											<FormControl>
												<Textarea
													placeholder='Enter a prompt to refine or construct.'
													className='resize-none'
													{...field}
												/>
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								
								<Button
   type='submit'
   size={'sm'}
   className={`bg-fuchsia-950 hover:bg-fuchsia-900 text-white ${isLoading ? 'loading' : ''}`}
   disabled={form.formState.isSubmitting || isLoading}
>
   Submit
</Button>

							</form>
						</Form>
					</Card>
				</div>

				{/* Web Copy & Description */}
				<div className='col-span-1 hidden md:block'>
					<div className='flex flex-col space-y-4 max-w-xl '>
						<h3 className='scroll-m-20 text-xl text-left font-semibold tracking-tight'>
						
						</h3>
						<p className='text-left text-sm'>
						Find diseases & condition
							<b className='font-semibold'>
							Search diseases & conditions
							</b>
							.
						</p>
						<p className='text-left text-sm'>
						"Can you tell me more about your condition? What symptoms are you experiencing and how have you been managing them?" 1
"How has your treatment been going? Are there any specific aspects you're concerned about or questions you have?" /n1
"Are there any lifestyle changes you've had to make due to your condition? How have these changes affected your daily life?" /n 
"What advice would you give to someone else dealing with a similar condition?/n Is there anything you've found particularly helpful?"
						</p>
						<p className='text-left text-sm'>
						
						</p>
					</div>
				</div>
			</div>

			{/* Prompt Input */}
			<div className='md:py-8 py-4 w-full'>
				{responseData && (
					<RatingBar
						rating={responseData?.response_evaluation.prompt_score ?? 0}
						maxRating={10}
					/>
				)}
			</div>

			{/* Prompt Response */}
			<div>
				{responseData && <RenderData data={responseData.response_evaluation} />}
			</div>
		</main>
	);
}

const RenderData = ({ data }: { data: any }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [promptResponse, setPromptResponse] = useState(null);

	async function getPromptResponse(prompt: string) {
		try {
			console.log(prompt);
			setIsLoading(true);

			if (!prompt) {
				console.log('Prompt is empty');
				return;
			}

			const response = await fetch(`/api/google/create`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ prompt }),
				cache: 'no-store',
			});

			if (!response.ok) {
				console.error(response.statusText[0]);
				return;
			}

			const json = await response.json();
			setPromptResponse(json.candidates[0].content.parts[0].text);
		} catch (error) {
			console.log(
				(error as Error).message ||
					'An error occurred while connecting to the model.'
			);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className='md:p-4 sm:p-2 p-0'>
			<div className='grid md:grid-cols-3 grid-cols-1 gap-2 md:gap-4'>
				{['task', 'content', 'exemplar', 'persona', 'format', 'tone'].map(
					(type) => (
						<div
							key={type}
							className='p-4 border rounded-2xl shadow bg-white'
						>
							<div className='flex items-center justify-between'>
								<h2 className='text-lg font-semibold tracking-tight text-fuchsia-950 capitalize'>
									{type}
								</h2>
								<Badge className='bg-fuchsia-950 text-white'>
									Score: {data[type].score} / 10
								</Badge>
							</div>
							<p className='text-sm tracking-wide font-normal mt-2'>
								{data[type].description}
							</p>
						</div>
					)
				)}
			</div>

			<div className='mt-4 flex flex-col space-y-2 py-8'>
				<h2 className='text-xl font-bold text-fuchsia-950 text-white'>
					Improvement Suggestions
				</h2>
				<p>{data.improvement_suggestions.description}</p>
			</div>

			<div className='mt-4 flex flex-col space-y-3'>
				<h2 className='text-xl font-bold text-fuchsia-950 text-white'>Improved Prompts</h2>

				{data.improved_prompt.map((prompt: any, index: number) => (
					<div key={index}>
						<div className='relative mt-2 p-4 border-l-4 border-yellow-600 pl-4 italic shadow bg-white rounded-xl'>
							<button
								className='absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-800 text-white'
								onClick={() => {
									navigator.clipboard.writeText(prompt.description);
								}}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									className='h-6 w-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
									/>
								</svg>
							</button>
							<blockquote className='italic pr-4'>
								<p>{prompt.description}</p>
							</blockquote>
						</div>
					
						<Button
 className='bg-fuchsia-950 hover:bg-fuchsia-900 mt-2 text-white'
 size={'sm'}
 onClick={() => {
   getPromptResponse(prompt.description);
 }}
 disabled={isLoading}
>
 {isLoading ? 'Loading...' : 'Try the prompt now!'}
</Button>


						<div className='mt-4'>
							{promptResponse && (
								<ReactMarkdown>{promptResponse}</ReactMarkdown>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};