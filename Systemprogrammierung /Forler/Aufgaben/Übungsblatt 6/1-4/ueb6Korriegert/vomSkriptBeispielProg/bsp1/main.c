#include <unistd.h>
#include <stdlib.h>
#include <fcntl.h>
#include <stdio.h>

int main(int args, char *argv[])
{
	const int flags = O_RDONLY | O_CREAT | O_EXCL;
        const int mode = S_IRUSR | S_IWUSR | S_IRGRP | S_IROTH;
	int fd;

	if(args != 2)
	{
		fprintf(stderr,"usage: mkfile <file>\n");
		exit(EXIT_FAILURE);
	}

	if ((fd = open(argv[1], flags, mode)) < 0 )
	{
		perror(argv[1]);
		exit(EXIT_FAILURE);
	}
	close(fd);
	return EXIT_SUCCESS;
}
			
