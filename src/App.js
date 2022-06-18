import {
	Box,
	Button,
	Flex,
	Heading,
	Image,
	List,
	ListItem,
	Stack,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();
	const [dice, setDice] = useState(1);
	const [error, setError] = useState(null);
	const [score, setScore] = useState(0);

	const numbers = [1, 2, 3, 4, 5, 6];

	const startGameHandler = () => {
		setGameStarted(true);
	};

	const onNumberClicked = (value) => {
		setSelectedNumber(value);
		setError(null);
	};
	const genRandomNo = () => {
		const generateNo = Math.ceil(Math.random() * 6);
		if (selectedNumber) {
			setDice(generateNo);

			if (selectedNumber === generateNo) {
				setScore((prev) => prev + generateNo);
			} else {
				setScore((prev) => prev - 2);
			}
		} else {
			setError("Please Select Number");
		}
	};

	return (
		<>
			{gameStarted ? (
				<>
					<Stack justify="center" h="100vh" align="center" mx="auto">
						<Heading
							as="h1"
							color={error ? "red" : " black"}
							fontSize="50"
							mb="4"
						>
							{error ? error : "Select Number"}
						</Heading>
						<Flex pb="4">
							{numbers.map((value) => (
								<Flex
									justify="center"
									align="center"
									h="50px"
									w="50px"
									bg={selectedNumber === value ? "green" : "black"}
									color="white"
									fontSize="2xl"
									mr="4"
									borderRadius="md"
									key={value}
									onClick={() => onNumberClicked(value)}
								>
									{value}
								</Flex>
							))}
						</Flex>
						<Box h="150px" width="150px" onClick={genRandomNo}>
							<Image src={`/dice/dice${dice}.png`} />
						</Box>
						<Text as="p" fontSize="xl">
							Click on dice to roll{" "}
						</Text>
						<Text
							color={score ? "red" : "green"}
							fontSize="8xl"
							fontWeight="bold"
						>
							{score}
						</Text>
						<Text fontSize="6xl" fontWeight="bold">
							Total Score
						</Text>
						<Button onClick={() => setScore(0)}>Reset Score</Button>
					</Stack>
					<Stack maxW="900px" mx="auto">
						<Heading as="h2">Game Rule</Heading>
						<List>
							<ListItem>Select Number any number</ListItem>
							<ListItem>Click on dice image to roll it</ListItem>
							<ListItem>
								Select number is equal to obtained dice result then you will get
								same point of dice
							</ListItem>
							<ListItem>
								Select number is equal to obtained dice result then you will get
								same point of dice
							</ListItem>
						</List>
					</Stack>
				</>
			) : (
				<Flex justify="center" align="center">
					<Image width="50%" src="/dices.png" />
					<Stack>
						<Heading fontSize="7xl" as="h1">
							The Dice Game
						</Heading>
						<Button
							alignSelf="flex-end"
							bg="black"
							color="white"
							_hover={{ bg: "orange" }}
							onClick={startGameHandler}
						>
							Start Game
						</Button>
					</Stack>
				</Flex>
			)}
		</>
	);
}
